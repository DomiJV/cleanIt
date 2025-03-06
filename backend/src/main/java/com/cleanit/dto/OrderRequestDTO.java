package com.cleanit.dto;

import com.cleanit.model.OrderItem;

import java.util.List;

public class OrderRequestDTO {
    private List<OrderItem> items;

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }
}
