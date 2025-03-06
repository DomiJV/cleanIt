package com.cleanit.repository;

import com.cleanit.model.CleaningOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CleaningOrderRepository extends JpaRepository<CleaningOrder, Integer> {

    List<CleaningOrder> findByCustomerId(Long customerId);

    @Query("SELECT c FROM CleaningOrder c WHERE c.customer.id = :customerId AND CAST(c.id AS string) LIKE %:id%")
    List<CleaningOrder> findByCustomerIdAndIdContaining(@Param("customerId") Long customerId, @Param("id") String id);

}
