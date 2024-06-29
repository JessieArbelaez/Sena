package com.ufo.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private VehicleType type;

    @Column(nullable = false, unique = true, length = 6)
    private String plate;

    @Column(nullable = false,columnDefinition = "TINYINT (1)")
    private Boolean status;

    @PrePersist
    protected void prePersist() {
        if (this.status == null) {
            this.status = true;
        }
    }
}
