Hello dear web portal dev prospect!

This repository is a playground for your submission.

Before getting started, please hit the `Use this template` button to create a new repository on which you commit and push your code regularly for the task below. Once you are done, please mail us the link to your repository.

If you encounter a problem or have questions about the task, feel free to email me under <dbutemann@vero.de>.

Good luck and have fun ☘️

# Task

Develop a web page that connects to a remote API, downloads a dataset, displays a table with the downloaded dataset, and provides some basic search and filter functions.

In particular, the web page should:

- Request the data located at `https://api.baubuddy.de/dev/index.php/v1/tasks/select` from PHP
- Display the downloaded data in a table showing `task`, `title`, `description` and `colorCode`. The displayed HTML element for the `colorCode` should have its color set accordingly
- Create a search which allows searching for any of the data in the table
- Implement auto-refresh functionality which requests the data from above every 60 minutes and updates the table with the new data without reloading the web page
- Outside the table, create a button that opens a modal. In this modal, there should be another button that allows you to select any image from the file system. When you have selected the image, it will be displayed in the modal
  - Note that this is not linked to the data from above

# Authorization

It is mandatory that your requests to the API are authorized. You can find the required request below:

This is how it looks in `curl`:

```bash
curl --request POST \
  --url https://api.baubuddy.de/index.php/login \
  --header 'Authorization: Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz' \
  --header 'Content-Type: application/json' \
  --data '{
        "username":"365",
        "password":"1"
}'
```

The response will contain a JSON object, having the access token in `json["oauth"]["access_token"]`. For all subsequent calls this has to be added to the request headers as `Authorization: Bearer {access_token}`.

A possible implementation in `PHP` could be the following. You don't have to adopt this, you can also customize it or use another network library.

```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.baubuddy.de/index.php/login",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"username\":\"365\", \"password\":\"1\"}",
  CURLOPT_HTTPHEADER => [
    "Authorization: Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz",
    "Content-Type: application/json"
  ],
]);
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
?>
```
