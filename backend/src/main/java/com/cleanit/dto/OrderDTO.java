package com.cleanit.dto;

import com.cleanit.model.CleaningOrder;
import com.cleanit.model.OrderItem;

import java.util.List;
import java.util.stream.Collectors;

public class OrderDTO {
    private Integer id;
    private CleaningOrder.OrderStatus status;
    private List<OrderItemDTO> items;
    private List<InvoiceDTO> invoices;

    public OrderDTO() {
    }

    public OrderDTO(CleaningOrder order) {
        this.id = order.getId();
        this.status = order.getStatus();

        if (order.getItems() != null) {
            this.items = order.getItems().stream()
                    .map(OrderItemDTO::new)
                    .collect(Collectors.toList());
        }

        if (order.getInvoices() != null) {
            this.invoices = order.getInvoices().stream()
                    .map(InvoiceDTO::new)
                    .collect(Collectors.toList());
        }
    }

    public CleaningOrder toEntity() {
        CleaningOrder order = new CleaningOrder();
        order.setId(this.id);
        return order;
    }

    public List<OrderItem> toOrderItems() {
        if (this.items == null) {
            return List.of();
        }
        return this.items.stream()
                .map(OrderItemDTO::toEntity)
                .collect(Collectors.toList());
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<OrderItemDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderItemDTO> items) {
        this.items = items;
    }

    public List<InvoiceDTO> getInvoices() {
        return invoices;
    }

    public void setInvoices(List<InvoiceDTO> invoices) {
        this.invoices = invoices;
    }

    public CleaningOrder.OrderStatus getStatus() {
        return status;
    }

    public void setStatus(CleaningOrder.OrderStatus status) {
        this.status = status;
    }
}