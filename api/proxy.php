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

// Forward the request and get the response.
$response = Factory::forward($request)->to($_REQUEST['url']);

// Output response to the browser.
header("Access-Control-Allow-Headers: \"Authorization, X-N26Auth\"");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: https://my.n26.com");

echo $response->getContent();

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