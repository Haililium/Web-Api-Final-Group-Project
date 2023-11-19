<?php 
//get all tripinfo 
function getAlltripinfo($db) {

    
    $sql = 'Select * FROM tripinfo '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get tripinfo by id 
function gettripinfo($db, $tripDate) {

    $sql = 'SELECT o.TripDate, o.TripLocation, o.TripDuration, o.Faculty, o.Transportation, o.NoStudents, o.LectName FROM tripinfo o ';
    $sql .= 'WHERE o.id = :id';
    $stmt = $db->prepare($sql);
    $id = (int) $tripDate;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Add new tripinfo
function createtripinfo($db, $form_data) { 
    $sql = 'INSERT INTO tripinfo (TripDate, TripLocation, TripDuration, Faculty, Transportation, NoStudents, LectName) '; 
    $sql .= 'VALUES (:TripDate, :TripLocation, :TripDuration, :Faculty, :Transportation, :NoStudents, :LectName)';
    $stmt = $db->prepare($sql);  
    $stmt->bindParam(':TripDate', $form_data['TripDate']);
    $stmt->bindParam(':TripLocation', $form_data['TripLocation']);
    $stmt->bindParam(':TripDuration', $form_data['TripDuration']);
    $stmt->bindParam(':Faculty', $form_data['Faculty']);
    $stmt->bindParam(':Transportation', $form_data['Transportation']);
    $stmt->bindParam(':NoStudents', $form_data['NoStudents']);
    $stmt->bindParam(':LectName', $form_data['LectName']);
    $stmt->execute(); 
    return $db->lastInsertID();
}

// Delete tripinfo by id 
function deletetripinfo($db, $tripDate) { 
    $sql = 'DELETE FROM tripinfo WHERE id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$tripDate; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

// Update tripinfo by id 
function updatetripinfo($db, $form_data, $tripDate) { 
    $sql = 'UPDATE tripinfo SET TripDate = :TripDate, TripLocation = :TripLocation, TripDuration = :TripDuration, Faculty = :Faculty, Transportation = :Transportation, NoStudents = :NoStudents, LectName = :LectName '; 
    $sql .= 'WHERE id = :id';
    $stmt = $db->prepare($sql); 
    $id = (int)$tripDate;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);   
    $stmt->bindParam(':TripDate', $form_data['TripDate']);
    $stmt->bindParam(':TripLocation', $form_data['TripLocation']);
    $stmt->bindParam(':TripDuration', $form_data['TripDuration']);
    $stmt->bindParam(':Faculty', $form_data['Faculty']);
    $stmt->bindParam(':Transportation', $form_data['Transportation']);
    $stmt->bindParam(':NoStudents', $form_data['NoStudents']);
    $stmt->bindParam(':LectName', $form_data['LectName']);
    $stmt->execute(); 
}