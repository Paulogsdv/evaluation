package br.com.precisa.portalbiapi.config.advisor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class RestControllerAdvisor {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> advisor(Exception exception) {

        exception.printStackTrace();

        Map<String, Object> map = new HashMap<>();
        map.put("erro", exception.getMessage());

        return ResponseEntity.badRequest().body(map);
    }
}
