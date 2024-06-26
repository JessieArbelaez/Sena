package com.ufo.repository;

//Conexion con clase Vehicle
import com.ufo.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

}
