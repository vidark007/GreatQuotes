package com.greatquotes.controller;

import com.greatquotes.controller.dto.QuoteDto;
import com.greatquotes.controller.mapper.QuoteMapper;
import com.greatquotes.model.Quote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.greatquotes.service.QuoteService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/great-quotes")
@CrossOrigin
public class QuoteController {

    @Autowired
    private QuoteService quoteService;
    private final QuoteMapper quoteMapper;

    public QuoteController(QuoteMapper quoteMapper) {
        this.quoteMapper = quoteMapper;
    }

    //test git
    @GetMapping("/quotes")
    public List<QuoteDto> getAllQuotes(){
        List<Quote> quotes = quoteService.getAllQuotes();
        List<QuoteDto> quoteDtoList= quotes.stream().map(quote -> quoteMapper.fromQuoteToQuoteDTO(quote)).collect(Collectors.toList());
        return quoteDtoList;
    }

    @GetMapping("/quote/{id}")
    public Quote getQuoteById(@PathVariable int id){
        return quoteService.findQuoteById(id);
    }

    @PostMapping("quote/newQuote")
    public void addNewQuote(@RequestBody QuoteDto newQuote){
        QuoteDto quoteDto = new QuoteDto();
        quoteDto.setAuthor(newQuote.getAuthor());
        quoteDto.setQuote(newQuote.getQuote());

        Quote quote = quoteMapper.fromQuoteDtoToQuote(quoteDto);

        quoteService.setQuote(quote);
    }
}
