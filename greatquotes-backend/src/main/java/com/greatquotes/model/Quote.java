package com.greatquotes.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Data @NoArgsConstructor
public class Quote {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator="native")
    @GenericGenerator(name = "native",strategy = "native",parameters ={
            @org.hibernate.annotations.Parameter(name = "increment_size", value = "0")
    })
    private int id;
    @Column(length=380)
    private String quote;
    private String author;

    @OneToMany(/*mappedBy = "quote",targetEntity = Comment.class,*/fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<Comment> comments;
}
