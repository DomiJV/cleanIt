package com.cleanit.dto;

import com.cleanit.model.OrderItem;

public class OrderItemDTO {
    private Integer id;
    private String material;
    private OrderItem.ItemType type;
    private Double price;

    public OrderItemDTO() {
    }

    public OrderItemDTO(OrderItem orderItem) {
        this.id = orderItem.getId();
        this.material = orderItem.getMaterial();
        this.type = orderItem.getType();
        this.price = orderItem.getPrice();
    }

    public static OrderItem toEntity(OrderItemDTO dto) {
        OrderItem item = new OrderItem();
        item.setId(dto.getId());
        item.setMaterial(dto.getMaterial());
        item.setType(dto.getType());
        item.setPrice(dto.getPrice());
        return item;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public OrderItem.ItemType getType() {
        return type;
    }

    public void setType(OrderItem.ItemType type) {
        this.type = type;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}