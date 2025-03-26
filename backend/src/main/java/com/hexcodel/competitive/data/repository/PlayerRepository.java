package com.hexcodel.competitive.data.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hexcodel.competitive.data.entity.PlayerEntity;

@Repository
public interface PlayerRepository extends JpaRepository<PlayerEntity, Integer> {
    @Query("SELECT p FROM PlayerEntity p INNER JOIN GameEntity g ON g.id = p.gameId WHERE g.slug = :slug")
    List<PlayerEntity> getPlayersByGameSlug(@Param("slug") String slug);

    Optional<PlayerEntity> getPlayerEntityById(@Param("id") int id);
}

