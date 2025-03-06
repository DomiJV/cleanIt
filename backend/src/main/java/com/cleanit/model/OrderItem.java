package com.cleanit.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class OrderItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private CleaningOrder order;

    @Column
    private String material;

    @Column
    @Enumerated(EnumType.STRING)
    private ItemType type;

    @Column
    private Double price;

    public enum ItemType {
        PANTS, SHIRT, OTHERS
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public ItemType getType() {
        return type;
    }

    public void setType(ItemType type) {
        this.type = type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public CleaningOrder getOrder() {
        return order;
    }

    public void setOrder(CleaningOrder order) {
        this.order = order;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }
}
