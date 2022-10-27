package com.greatquotes.service;

import com.greatquotes.controller.mapper.QuoteMapper;
import com.greatquotes.model.Quote;
import com.greatquotes.repository.QuoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuoteService {

    private final QuoteRepository quoteRepository;
    private final QuoteMapper quoteMapper;

    public QuoteService(QuoteRepository quoteRepository, QuoteMapper quoteMapper) {
        this.quoteRepository = quoteRepository;
        this.quoteMapper = quoteMapper;
    }

    public List<Quote> getAllQuotes(){
        List<Quote> quotes = quoteRepository.findAll();
        return quotes;
    }

    public Quote findQuoteById(int id){
        return quoteRepository.findQuoteById(id);
    }


    public void setQuote(Quote quote) {
        quoteRepository.save(quote);
    }
}
