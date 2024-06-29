package com.ufo.controller;

//Llamar metodos
import com.ufo.model.Vehicle;
import com.ufo.repository.VehicleRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicles")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    //Read
    @GetMapping("/")
    public Iterable<Vehicle> index() {
        return this.vehicleRepository.findAll();
    }

    //Create
    @PostMapping("/create")
    public Vehicle create(@RequestBody Vehicle newVehicle) {
        return this.vehicleRepository.save(newVehicle);
    }

    //Update
    @PutMapping("/edit")
    public Vehicle update(@RequestBody Vehicle vehicle) {
        Long id = vehicle.getId();
        Optional<Vehicle> vehicleFound = this.vehicleRepository.findById(id);
        if (vehicleFound.isPresent()) {
            vehicleFound.get().setType(vehicle.getType());
            vehicleFound.get().setPlate(vehicle.getPlate());
            return this.vehicleRepository.save(vehicleFound.get());
        }

        throw new RuntimeException("Vehicle not found with id: " + id);
    }

    //Delete
    @DeleteMapping(value = "/{id}")
    public String delete(@PathVariable("id") Long id) {
        Optional<Vehicle> vehicleFound = this.vehicleRepository.findById(id);
        if (vehicleFound.isEmpty()) {
            return "Vehículo no encontrado.";
        } else {
            this.vehicleRepository.deleteById(id);
            return "Vehículo borrado satisfactoriamente.";
        }
    }

    @PatchMapping("/activate/{id}")
    public String activate(@PathVariable("id") Long id) {
        Optional<Vehicle> vehicleFound = this.vehicleRepository.findById(id);
        if (vehicleFound.isEmpty()) {
            return "Vehículo no encontrado.";
        } else {
            vehicleFound.get().setStatus(Boolean.TRUE);
            this.vehicleRepository.save(vehicleFound.get());
            return "Vehículo activado.";
        }
    }

    @PatchMapping("/deactivate/{id}")
    public String deactivate(@PathVariable("id") Long id) {
        Optional<Vehicle> vehicleFound = this.vehicleRepository.findById(id);
        if (vehicleFound.isEmpty()) {
            return "Vehículo no encontrado.";
        } else {
            vehicleFound.get().setStatus(Boolean.FALSE);
            this.vehicleRepository.save(vehicleFound.get());
            return "Vehículo desactivado.";
        }
    }
}
