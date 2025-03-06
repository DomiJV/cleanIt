package com.cleanit.service;

import com.cleanit.model.CleaningOrder;
import com.cleanit.model.Customer;
import com.cleanit.model.OrderItem;
import com.cleanit.repository.CleaningOrderRepository;
import com.cleanit.repository.OrderItemRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final CleaningOrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;

    public OrderService(CleaningOrderRepository orderRepository, OrderItemRepository orderItemRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }

    @Transactional(readOnly = true)
    public Optional<CleaningOrder> getOrderById(int id) {
        return orderRepository.findById(id);
    }

    @Transactional(readOnly = true)
    public List<CleaningOrder> getOrdersOfCustomer(Integer customerId) {
        return orderRepository.findByCustomerId(customerId.longValue());
    }

    @Transactional(readOnly = true)
    public List<CleaningOrder> searchOrdersOfCustomer(Integer customerId, String searchId) {
        return orderRepository.findByCustomerIdAndIdContaining(customerId.longValue(),searchId);
    }

    @Transactional
    public CleaningOrder createOrder(Customer customer, List<OrderItem> items) {
        CleaningOrder order = new CleaningOrder();
        order.setCustomer(customer);
        order.setCreationDate(LocalDateTime.now());
        order.setStatus(CleaningOrder.OrderStatus.NEW);
        CleaningOrder savedOrder = orderRepository.save(order);

        for (OrderItem item : items) {
            item.setOrder(savedOrder);
            item.setPrice(calcPrice(item));
            orderItemRepository.save(item);
        }

        return savedOrder;
    }

    private double calcPrice(OrderItem item) {
        double price = 0;
        switch (item.getType()) {
            case OrderItem.ItemType.PANTS:
                price = 39.50;
                break;
            case OrderItem.ItemType.SHIRT:
                price = 29.50;
                break;
            case OrderItem.ItemType.OTHERS:
                price = 49.50;
                break;
            default:
        }
        return price;
    }

}
