package com.greatquotes.controller;

import com.greatquotes.controller.dto.QuoteDto;
import com.greatquotes.model.Quote;
import com.greatquotes.repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.greatquotes.service.QuoteService;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/great-quotes")
@CrossOrigin
public class QuoteController {

    @Autowired
    private QuoteService quoteService;

//test git
    @GetMapping("/quotes")
    public List<QuoteDto> getAllQuotes(){
        return quoteService.getAllQuotes();
    }

    @GetMapping("/quote/{id}")
    public Quote getQuoteById(@PathVariable int id){
        return quoteService.findQuoteById(id);
    }

    public QuoteService getQuoteService(){
        return quoteService;
    }

    public QuoteService quoteService(){
        return quoteService;
    }

}
