package com.hexcodel.competitive.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hexcodel.competitive.data.entity.GameEntity;

import java.util.Optional;

@Repository
public interface GameRepository extends JpaRepository<GameEntity, Integer> {
    @Query("SELECT g FROM GameEntity g WHERE g.slug = :slug")
    Optional<GameEntity> getBySlug(@Param("slug") String slug);
}
