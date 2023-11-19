<?php 
//get all studentinfo 
function getAllstudentinfo($db) {

    
    $sql = 'SELECT * FROM studentinfo '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get studentinfo by id 
function getstudentinfo($db, $studentID) {

    $sql = 'SELECT o.studentID, o.studentName, o.studentEmail, o.studentPhone, o.Faculty, o.CourseCode FROM studentinfo o ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $studentID;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 

}

//add new studentinfo 
// add new studentinfo 
function createstudentinfo($db, $form_data) { 
    $sql = 'INSERT INTO studentinfo (studentID, studentName, studentEmail, studentPhone, Faculty, CourseCode)'; 
    $sql .= ' VALUES (:studentID, :studentName, :studentEmail, :studentPhone, :Faculty, :CourseCode)';  
    $stmt = $db->prepare($sql); 
    $stmt->bindParam(':studentID', $form_data['studentID']);
    $stmt->bindParam(':studentName', $form_data['studentName']);
    $stmt->bindParam(':studentEmail', $form_data['studentEmail']);
    $stmt->bindParam(':studentPhone', $form_data['studentPhone']);
    $stmt->bindParam(':Faculty', $form_data['Faculty']);
    $stmt->bindParam(':CourseCode', $form_data['CourseCode']);
    $stmt->execute(); 
    return $db->lastInsertID();
}

//delete studentinfo by id 
function deletestudentinfo($db,$studentID) { 

    $sql = ' DELETE FROM studentinfo where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$studentID; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update studetinfo by id 
function updatestudentinfo($db,$form_data,$studentID) { 

    
    $sql = 'UPDATE studentinfo SET studentID = :studentID , studentName = :studentName , studentEmail = :studentEmail , studentPhone = :studentPhone , Faculty = :Faculty , CourseCode = :CourseCode'; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$studentID;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->bindParam(':studentID', $form_data['studentID']);
    $stmt->bindParam(':studentName', $form_data['studentName']);
    $stmt->bindParam(':studentEmail', $form_data['studentEmail']);
    $stmt->bindParam(':studentPhone', $form_data['studentPhone']);
    $stmt->bindParam(':Faculty', $form_data['Faculty']);
    $stmt->bindParam(':CourseCode', $form_data['CourseCode']);
    $stmt->execute(); 
}