package com.ufo.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "license_categories")
public class LicenseCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

}
