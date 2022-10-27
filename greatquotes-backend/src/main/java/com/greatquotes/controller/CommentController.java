package com.greatquotes.controller;

import com.greatquotes.controller.dto.CommentDto;
import com.greatquotes.controller.mapper.CommentMapper;
import com.greatquotes.model.Comment;
import com.greatquotes.model.Quote;
import com.greatquotes.repository.QuoteRepository;
import com.greatquotes.service.CommentService;
import com.greatquotes.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/great-quotes")
@CrossOrigin
public class CommentController {
    @Autowired
    private CommentService commentService;
    @Autowired
    private QuoteService quoteService;

    private final CommentMapper commentMapper;

    public CommentController(CommentMapper commentMapper) {
        this.commentMapper = commentMapper;
    }

    @GetMapping("/quote/comment/{id}")
    public List<CommentDto> getAllCommentsFromQuote(@PathVariable int id){
        List<Comment> commentList = commentService.getAllCommentsFromQuote(id);

        List<CommentDto> commentDtoList = commentList.stream().map(
                        comment -> commentMapper.fromCommentToCommentDTO(comment))
                        .collect(Collectors.toList());

        return commentDtoList;
    }

    @GetMapping("/comments")
    public List<CommentDto> getAllComments(){
        List<Comment> commentList = commentService.getAllComments();
        List<CommentDto> commentDtoList = commentList.stream().map(comment -> commentMapper.fromCommentToCommentDTO(comment)).collect(Collectors.toList());
        return commentDtoList;
    }

    @PostMapping("/quote/addComment/{quoteId}")
    public void addNewComment(@RequestBody String newComment, @PathVariable int quoteId){
        CommentDto commentDto = new CommentDto();
        commentDto.setComment(newComment);
        Comment comment = commentMapper.fromCommentDtoToComment(commentDto);

        Quote quote = quoteService.findQuoteById(quoteId);
        commentService.setComment(comment, quote);
    }

}
