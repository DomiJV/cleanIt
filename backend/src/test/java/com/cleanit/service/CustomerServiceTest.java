package com.cleanit.service;

import com.cleanit.model.Customer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class CustomerServiceTest {

    @Autowired
    CustomerService customerService;

    @Test
    void getCustomerById() {
        Optional<Customer> customer = customerService.getCustomerById(1);
        assertTrue(customer.isPresent());
    }
}