package com.greatquotes.controller.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class QuoteDto {
    private int id;
    @NotBlank(message = "Quote must be sat")
    private String quote;
    @NotBlank(message = "Author must be sat")
    private String author;
}
