package com.greatquotes.repository;

import com.greatquotes.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Integer> {

    List<Comment> findCommentByQuote_Id(int id);
    List<Comment> findAll();
    Comment findCommentById(int id);
}
