package dto.models;

import org.hibernate.annotations.Entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Giraffes")
public class Giraffe {
    @Id @GeneratedValue
    @Column(name = "name")
    private String name;

    public Giraffe() {

    }

    public Giraffe(String name) {
        this.name = name;
    }
}