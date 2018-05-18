<?php
// ini_set('display_errors', 'On');
// error_reporting(E_ALL);
// header('Access-Control-Allow-Origin: https://my.n26.com');

require 'vendor/autoload.php';

//*
use Proxy\Factory;
use Proxy\Response\Filter\RemoveEncodingFilter;
use Symfony\Component\HttpFoundation\Request;


// Create a Symfony request based on the current browser request.
$request = Request::createFromGlobals();

$request->headers->set('Authorization', 'bearer ' . $_REQUEST['token']);
$request->headers->set('Accept', 'application/json');
$request->headers->set('Origin', 'https://my.n26.com');

// print_r($response);

// Forward the request and get the response.
$response = Factory::forward($request)->to($_REQUEST['url']);

// Output response to the browser.
header("Access-Control-Allow-Headers: Authorization, X-N26Auth, Content-Type");
//header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, POST, PUT");
header("Access-Control-Allow-Origin: https://my.n26.com");
header("Content-Type: application/json");

$return = $response->getContent();
if ($_POST) {
    echo $return;
} else {
    // just for /me
    //echo gzinflate(substr($return, 10));
    echo $return;
}

// quick hack ;-)
// echo json_encode(array('bitcoinbon' => 'https://www.bitcoinbon.at/index.en?c=C64A-86B4-CD93-6EFC-FDA3'));

// $response->send();
// */


/*
use Proxy\Proxy;
use Proxy\Adapter\Guzzle\GuzzleAdapter;
use Proxy\Filter\RemoveEncodingFilter;
use Zend\Diactoros\ServerRequestFactory;

// Create a PSR7 request based on the current browser request.
$request = ServerRequestFactory::fromGlobals();

// Create a guzzle client
$guzzle = new GuzzleHttp\Client();

// Create the proxy instance
$proxy = new Proxy(new GuzzleAdapter($guzzle));

// Add a response filter that removes the encoding headers.
// $proxy->filter(new RemoveEncodingFilter());

// Forward the request and get the response.
$response = $proxy->forward($request)->to($_REQUEST['url']);

echo $response->getContent();
*/
// Output response to the browser.
// (new Zend\Diactoros\Response\SapiEmitter)->emit($response);