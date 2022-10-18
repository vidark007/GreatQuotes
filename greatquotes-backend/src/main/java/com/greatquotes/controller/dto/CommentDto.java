package com.greatquotes.controller.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.time.ZonedDateTime;

@Data
public class CommentDto {
    @NotBlank
    private String comment;
}
