package com.ufo.controller;

import com.ufo.model.LicenseCategory;
import com.ufo.repository.LicenseCategoryRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/license-category")
public class LicenseCategoryController {

    @Autowired
    private LicenseCategoryRepository licenseCategoryRepository;

    //Read
    @GetMapping("/")
    public Iterable<LicenseCategory> index() {
        return this.licenseCategoryRepository.findAll();
    }

    //Create 
    @PostMapping("/create")
    public LicenseCategory create(@RequestBody LicenseCategory newLicenseCategory) {
        return this.licenseCategoryRepository.save(newLicenseCategory);
    }

    //Update
    @PutMapping("/edit")
    public LicenseCategory update(@RequestBody LicenseCategory licenseCategory) {
        Long id = licenseCategory.getId();
        Optional<LicenseCategory> licenseCategoryFound = this.licenseCategoryRepository.findById(id);

        if (licenseCategoryFound.isPresent()) {
            licenseCategoryFound.get().setName(licenseCategory.getName());
            return this.licenseCategoryRepository.save(licenseCategoryFound.get());
        }

        throw new RuntimeException("License Category not found with id: " + id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Long id) {
        Optional<LicenseCategory> licenseCategoryFound = this.licenseCategoryRepository.findById(id);
        if (licenseCategoryFound.isEmpty()) {
            return "Categoría de licencia no encontrado.";
        } else {
            this.licenseCategoryRepository.deleteById(id);
            return "Categoría de licencia borrada satisfactoriamente.";
        }
    }

}
