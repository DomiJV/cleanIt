package com.cleanit.service;

import com.cleanit.model.Invoice;
import com.cleanit.repository.InvoiceRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;

    public InvoiceService(InvoiceRepository invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    @Transactional(readOnly = true)
    public Optional<Invoice> getInvoicesById(int id) {
        return invoiceRepository.findById(id);
    }

}
