<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Repository\GoodsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource(
    normalizationContext: ['groups' => ['goods']]
)]
#[ORM\Entity(repositoryClass: GoodsRepository::class)]
class Goods
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    #[Groups("goods")]
    private $id;

    #[ORM\ManyToOne(targetEntity: Catalog::class, inversedBy: 'goods')]
    #[ORM\JoinColumn(name: 'id_catalog', nullable: true)]
    #[Groups("goods")]
    private ?Catalog $catalog;

    #[ORM\ManyToOne(targetEntity: Measure::class, inversedBy: 'goods')]
    #[ORM\JoinColumn(name: 'id_measure')]
    #[Groups("goods")]
    private Measure $measure;

    #[ORM\Column(type: 'boolean')]
    #[Groups("goods")]
    private $hidden;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups("goods")]
    private $name;

    #[ORM\Column(type: 'float')]
    #[Groups("goods")]
    private $quantity;

    #[ORM\Column(type: 'float')]
    #[Groups("goods")]
    private $regprice;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCatalog(): ?Catalog
    {
        return $this->catalog;
    }

    public function setCatalog(?Catalog $catalog): self
    {
        $this->catalog = $catalog;

        return $this;
    }

    public function getMeasure(): Measure
    {
        return $this->measure;
    }

    public function setMeasure(Measure $measure): self
    {
        $this->measure = $measure;

        return $this;
    }

    public function getHidden(): ?bool
    {
        return (bool)$this->hidden;
    }

    public function setHidden(bool $hidden): self
    {
        $this->hidden = (int)$hidden;

        return $this;
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

    public function getQuantity(): ?float
    {
        return $this->quantity;
    }

    public function setQuantity(float $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getRegprice(): ?float
    {
        return $this->regprice;
    }

    public function setRegprice(float $regprice): self
    {
        $this->regprice = $regprice;

        return $this;
    }
}
