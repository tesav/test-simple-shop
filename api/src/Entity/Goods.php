<?php

namespace App\Entity;

use App\Repository\GoodsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GoodsRepository::class)]
class Goods
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Catalog::class, inversedBy: 'goods')]
    #[ORM\JoinColumn(name: 'id_catalog')]
    private $catalog;

    #[ORM\ManyToOne(targetEntity: Measure::class, inversedBy: 'goods')]
    #[ORM\JoinColumn(name: 'id_measure', nullable: false)]
    private $measure;

    #[ORM\Column(type: 'smallint')]
    private $hidden;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'float')]
    private $quantity;

    #[ORM\Column(type: 'float')]
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

    public function getMeasure(): ?Measure
    {
        return $this->measure;
    }

    public function setIdMeasure(?Measure $measure): self
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
