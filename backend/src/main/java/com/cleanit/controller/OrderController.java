package com.cleanit.controller;

import com.cleanit.dto.OrderDTO;
import com.cleanit.dto.OrderRequestDTO;
import com.cleanit.model.CleaningOrder;
import com.cleanit.model.Customer;
import com.cleanit.model.OrderItem;
import com.cleanit.service.CustomerService;
import com.cleanit.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {
    private final OrderService orderService;
    private final CustomerService customerService;

    public OrderController(OrderService orderService, CustomerService customerService) {
        this.orderService = orderService;
        this.customerService = customerService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable Integer id) {
        return orderService.getOrderById(id)
                .map(OrderDTO::new)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<OrderDTO>> getOrdersOfCustomer(@RequestParam(required = false) String searchId) {
        int id = 1; // Here we would fetch the user from the session
        List<CleaningOrder> orders;
        if (searchId != null) {
            orders = orderService.searchOrdersOfCustomer(id, searchId);
        } else {
            orders = orderService.getOrdersOfCustomer(id);
        }
        List<OrderDTO> orderDTOs = orders.stream()
                .map(OrderDTO::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok(orderDTOs);
    }

    @PostMapping
    public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderRequestDTO orderRequestDTO) {
        Optional<Customer> customer = customerService.getCustomerById(1); // Use Security Session

        if (customer.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        List<OrderItem> items = orderRequestDTO.getItems();
        CleaningOrder savedOrder = orderService.createOrder(customer.get(), items);
        return ResponseEntity.ok(new OrderDTO(savedOrder));
    }
}