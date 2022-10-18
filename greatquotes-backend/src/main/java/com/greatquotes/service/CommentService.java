package com.greatquotes.service;

import com.greatquotes.model.Comment;
import com.greatquotes.model.Quote;
import com.greatquotes.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;


    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public List<Comment> getAllCommentsFromQuote(int id){
        List<Comment> commentList = commentRepository.findCommentByQuote_Id(id);
        return commentList;
    }

    public List<Comment> getAllComments(){
        return commentRepository.findAll();
    }

    public void setComment(Comment newComment, Quote quote){
        Comment comment = new Comment();
        comment.setComment(newComment.getComment());
        comment.setCreatedAt(ZonedDateTime.now());
        comment.setUpdatedAt(ZonedDateTime.now());
        comment.setQuote(quote);
        commentRepository.save(comment);
    }
}
