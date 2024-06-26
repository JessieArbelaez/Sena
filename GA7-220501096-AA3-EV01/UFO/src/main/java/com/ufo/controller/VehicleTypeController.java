package com.ufo.controller;

import com.ufo.model.VehicleType;
import com.ufo.repository.VehicleTypeRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicle-types")
public class VehicleTypeController {

    @Autowired
    private VehicleTypeRepository vehicleTypeRepository;

    //Read
    @GetMapping("/")
    public Iterable<VehicleType> index() {
        return this.vehicleTypeRepository.findAll();
    }

    //Create
    @PostMapping("/create")
    public VehicleType create(@RequestBody VehicleType newVehicleType) {
        return this.vehicleTypeRepository.save(newVehicleType);
    }

    //Update
    @PutMapping("/edit")
    public VehicleType edit(@RequestBody VehicleType vehicleType) {
        Long id = vehicleType.getId();
        Optional<VehicleType> vehicleTypeFound = this.vehicleTypeRepository.findById(id);

        if (vehicleTypeFound.isPresent()) {
            vehicleTypeFound.get().setName(vehicleType.getName());
            return this.vehicleTypeRepository.save(vehicleTypeFound.get());
        }

        throw new RuntimeException("VehicleType not found with id: " + id);
    }

    //Delete
    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Long id) {
        Optional<VehicleType> vehicleTypeFound = this.vehicleTypeRepository.findById(id);
        if (vehicleTypeFound.isEmpty()) {
            return "Tipo de vehiculo no encontrado";
        } else {
            this.vehicleTypeRepository.deleteById(id);
            return "Tipo de vehiculo borrado satisfactoriamente";
        }

    }

}
