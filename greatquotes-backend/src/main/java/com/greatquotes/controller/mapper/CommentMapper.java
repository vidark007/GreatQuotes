package com.greatquotes.controller.mapper;

import com.greatquotes.controller.dto.CommentDto;
import com.greatquotes.model.Comment;
import lombok.Data;
import org.springframework.stereotype.Service;

@Service
@Data
public class CommentMapper {

    public Comment fromCommentDtoToComment(CommentDto commentDto){
        final Comment comment = new Comment();
        comment.setComment(commentDto.getComment());
        return comment;
    }

    public CommentDto fromCommentToCommentDTO(Comment comment){
        final CommentDto commentDto = new CommentDto();
        commentDto.setComment(comment.getComment());
        return commentDto;
    }
}
