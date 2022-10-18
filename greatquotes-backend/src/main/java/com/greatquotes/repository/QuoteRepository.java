package com.greatquotes.repository;

import com.greatquotes.model.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuoteRepository extends JpaRepository<Quote,Integer> {
    Quote findQuoteById(int id);
}
