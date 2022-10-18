package com.greatquotes.service;

import com.greatquotes.controller.dto.QuoteDto;
import com.greatquotes.controller.mapper.QuoteMapper;
import com.greatquotes.model.Comment;
import com.greatquotes.model.Quote;
import com.greatquotes.repository.QuoteRepository;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuoteService {

    private final QuoteRepository quoteRepository;
    private final QuoteMapper quoteMapper;


    public QuoteService(QuoteRepository quoteRepository, QuoteMapper quoteMapper) {
        this.quoteRepository = quoteRepository;
        this.quoteMapper = quoteMapper;
    }

    public List<QuoteDto> getAllQuotes(){
        List<Quote> quotes = quoteRepository.findAll();
        List<QuoteDto> quoteDtoList= quotes.stream().map(quote -> quoteMapper.fromQuoteToQuoteDTO(quote)).collect(Collectors.toList());
        return quoteDtoList;
    }

    public Quote findQuoteById(int id){
        return quoteRepository.findQuoteById(id);
    }


}
