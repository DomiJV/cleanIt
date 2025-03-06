package com.cleanit.service;

import com.cleanit.model.CleaningOrder;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
class OrderServiceTest {

    @Autowired
    private OrderService orderService;

    @Test
    void getOrderById() {
        Optional<CleaningOrder> order = orderService.getOrderById(101);
        order.get().getItems().forEach(System.out::println);
        order.ifPresent(System.out::println);
    }
}