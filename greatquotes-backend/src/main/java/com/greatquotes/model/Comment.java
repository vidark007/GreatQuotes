package com.greatquotes.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Data @NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO,generator="native")
    @GenericGenerator(name = "native",strategy = "native")
    private int id;

    private String comment;
    private ZonedDateTime createdAt;
    private ZonedDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    private Quote quote;

}
