package com.cleanit.dto;

import com.cleanit.model.Invoice;

import java.time.LocalDateTime;

public class InvoiceDTO {
    private Integer id;
    private Integer orderId;
    private Invoice.InvoiceStatus status;
    private Double amount;
    private LocalDateTime creationDate;
    private LocalDateTime paidDate;

    public InvoiceDTO() {
    }

    public InvoiceDTO(Invoice invoice) {
        this.id = invoice.getId();
        this.orderId = invoice.getOrder() != null ? invoice.getOrder().getId() : null;
        this.status = invoice.getStatus();
        this.amount = invoice.getAmount();
        this.creationDate = invoice.getCreationDate();
        this.paidDate = invoice.getPaidDate();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Invoice.InvoiceStatus getStatus() {
        return status;
    }

    public void setStatus(Invoice.InvoiceStatus status) {
        this.status = status;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getPaidDate() {
        return paidDate;
    }

    public void setPaidDate(LocalDateTime paidDate) {
        this.paidDate = paidDate;
    }
}