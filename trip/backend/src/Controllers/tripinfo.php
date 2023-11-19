<?php 

use Slim\Http\Request; //namespace 
use Slim\Http\Response; //namespace 

//include adminProc.php file 
include __DIR__ .'/function/tripinfoProc.php';


//alow cors
// $app->options('/{routes:.+}', function ($request, $response, $args) {
//     return $response;
// });

// $app->add(function ($req, $res, $next) {
//     $response = $next($req, $res);
//     return $response
//             ->withHeader('Access-Control-Allow-Origin', '*')
//             ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
//             ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
// });
//end

// FOR tripinfo

//read table tripinfo
$app->get('/tripinfo', function (Request $request, Response $response, array $arg){

    return $this->response->withJson(array('data' => 'success'), 200); });  
 
// read all data from table tripdata 
$app->get('/alltripinfo',function (Request $request, Response $response,  array $arg) { 

    $data = getAlltripinfo($this->db); 
    if (is_null($data)) { 

        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
} 
    return $this->response->withJson(array('data' => $data), 200); }); 

//request table order by condition (trip id) 
$app->get('/tripinfo/[{id}]', function ($request, $response, $args){   
    $tripDate = $args['id']; 
    if (!is_numeric($tripDate)) { 

        return $this->response->withJson(array('error' => 'numeric paremeter required'), 500);  
} 
    $data = gettripinfo($this->db, $tripDate); 
    if (empty($data)) { 

        return $this->response->withJson(array('error' => 'no data'), 500); 
} 

return $this->response->withJson(array('data' => $data), 200);});

// Add new tripinfo
$app->post('/tripinfo/add', function ($request, $response, $args) { 
    $form_data = $request->getParsedBody(); 
    $data = createtripinfo($this->db, $form_data); 

    if (is_null($data)) { 
        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
    } 

    return $this->response->withJson(array('data' => $data), 201); 
});

// Delete tripinfo by id 
$app->delete('/tripinfo/del/{id}', function ($request, $response, $args){   
    $tripDate = $args['id']; 
    
    if (!is_numeric($tripDate)) { 
        return $this->response->withJson(array('error' => 'numeric parameter required'), 422); 
    } 

    $data = deletetripinfo($this->db, $tripDate); 
    if (empty($data)) { 
        return $this->response->withJson(array('data' => $tripDate . ' is successfully deleted'), 202);
    }
});

// Update tripinfo by id
$app->put('/tripinfo/update/{id}', function ($request, $response, $args){   
    $tripDate = $args['id'];
    $form_data = $request->getParsedBody(); 
    
    if (!is_numeric($tripDate)) { 
        return $this->response->withJson(array('error' => 'numeric parameter required'), 422); 
    } 
    
    updatetripinfo($this->db, $form_data, $tripDate);
    
    return $this->response->withJson(array('data' => $tripDate . ' is successfully updated'), 200);
});

// Update tripinfo by id (alternative route)
$app->put('/tripinfo/put/{id}', function ($request, $response, $args){
    $tripDate = $args['id']; 
    
    if (!is_numeric($tripDate)) { 
        return $this->response->withJson(array('error' => 'numeric parameter required'), 422); 
    } 

    $form_data = $request->getParsedBody(); 
    updatetripinfo($this->db, $form_data, $tripDate); 
    
    return $this->response->withJson(array('data' => $tripDate . ' is successfully updated'), 200); 
});