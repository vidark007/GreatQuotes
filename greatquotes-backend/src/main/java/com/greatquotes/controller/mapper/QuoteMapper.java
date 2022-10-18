package com.greatquotes.controller.mapper;

import com.greatquotes.controller.dto.CommentDto;
import com.greatquotes.controller.dto.QuoteDto;
import com.greatquotes.model.Comment;
import com.greatquotes.model.Quote;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Data
public class QuoteMapper {

    public Quote fromQuoteDtoToQuote(QuoteDto quoteDto){
       final Quote quote = new Quote();
       quote.setId(quoteDto.getId());
       quote.setQuote(quoteDto.getQuote());
       quote.setAuthor(quoteDto.getAuthor());
       return quote;
    }

    public QuoteDto fromQuoteToQuoteDTO(Quote quote){
        final QuoteDto quoteDto = new QuoteDto();
        quoteDto.setId(quote.getId());
        quoteDto.setQuote(quote.getQuote());
        quoteDto.setAuthor(quote.getAuthor());
        return quoteDto;
    }
}
