<?php

use Slim\Http\Request; // namespace
use Slim\Http\Response; // namespace

// include adminProc.php file
include __DIR__ . '/function/studentinfoProc.php';

// allow CORS
/*$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});*/
// end

// FOR STUDENTINFO

// read table studentinfo
$app->get('/studentinfo', function (Request $request, Response $response, array $args) {
    return $this->response->withJson(array('data' => 'success'), 200);
});

// read all data from table studentinfo
$app->get('/allstudentinfo', function (Request $request, Response $response, array $args) {
    $data = getAllstudentinfo($this->db);
    if (empty($data)) {
        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404);
    }
    return $this->response->withJson(array('data' => $data), 200);
});

// request table order by condition
$app->get('/studentinfo/[{id}]', function ($request, $response, $args) {
    $studentID = $args['id'];
    if (!is_numeric($studentID)) {
        return $this->response->withJson(array('error' => 'numeric parameter required'), 500);
    }
    $data = getstudentinfo($this->db, $studentID);
    if (empty($data)) {
        return $this->response->withJson(array('error' => 'no data'), 500);
    }
    return $this->response->withJson(array('data' => $data), 200);
});

// post method order
$app->post('/studentinfo/add', function ($request, $response, $args) {
    $form_data = $request->getParsedBody();
    $data = createstudentinfo($this->db, $form_data);
    if ($data) {
        return $this->response->withJson(array('data' => $data), 201);
    } else {
        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404);
    }
});

// delete row Order
$app->delete('/studentinfo/del/[{id}]', function ($request, $response, $args) {
    $studentID = $args['id'];

    if (!is_numeric($studentID)) {
        return $this->response->withJson(array('error' => 'numeric parameter required'), 422);
    }

    $data = deletestudentinfo($this->db, $studentID);

    if ($data) {
        return $this->response->withJson(array('data' => $studentID . ' is successfully deleted'), 202);
    }
});

   
//put table order 
$app->put('/studentinfo/put/[{id}]', function ($request, $response, $args){
    $studentID = $args['id']; 
    
    if (!is_numeric($studentID)) { 
        
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); } 
        $form_data=$request->getParsedBody(); 
        $data=updatestudentinfo($this->db,$form_data,$studentID); 
        if ($data <=0) {
        return $this->response->withJson(array('data' => 'successfully updated'), 200); 
        }
});