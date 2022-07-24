<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Repository\MeasureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

//#[ApiResource(mercure: true)]
#[ApiResource]
#[ORM\Entity(repositoryClass: MeasureRepository::class)]
class Measure
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private $id;

    #[ORM\Column(type: 'string', length: 64)]
    #[Groups("goods")]
    private $name;

    #[ORM\OneToMany(mappedBy: 'measure', targetEntity: Goods::class)]
    private $goods;

    public function __construct()
    {
        $this->goods = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Goods[]
     */
    public function getGoods(): Collection
    {
        return $this->goods;
    }

    public function addGood(Goods $good): self
    {
        if (!$this->goods->contains($good)) {
            $this->goods[] = $good;
            $good->setMeasure($this);
        }

        return $this;
    }

    public function removeGood(Goods $good): self
    {
        if ($this->goods->removeElement($good)) {
            // set the owning side to null (unless already changed)
            if ($good->getMeasure() === $this) {
                $good->setMeasure(null);
            }
        }

        return $this;
    }
}
