package com.greatquotes;

import com.greatquotes.model.Comment;
import com.greatquotes.model.Quote;
import com.greatquotes.repository.QuoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.time.ZonedDateTime;
import java.util.Optional;
import java.util.Set;

@SpringBootApplication
@Slf4j
@EnableJpaRepositories("com.greatquotes.repository")
@EntityScan("com.greatquotes.model")
@CrossOrigin(origins = "http://localhost:8080/")
public class GreatquotesApplication {

	public static void main(String[] args) {
        SpringApplication.run(GreatquotesApplication.class, args);
    }

}
