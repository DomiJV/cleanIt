package com.cleanit.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
public class Invoice implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private CleaningOrder order;

    @Column
    @Enumerated(EnumType.STRING)
    private InvoiceStatus status;

    @Column
    private Double amount;

    @Column
    private LocalDateTime creationDate;

    @Column
    private LocalDateTime paidDate;

    public enum InvoiceStatus {
        OPEN, PAID, PARTIALLY_PAID
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

    public InvoiceStatus getStatus() {
        return status;
    }

    public void setStatus(InvoiceStatus type) {
        this.status = type;
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
