# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections in asynchronous operations within an HTTP server.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` server simulates an asynchronous operation (`someAsyncOperation`) that may fail.  However, it lacks proper error handling, leading to unhandled promise rejections.  This can result in the server crashing or, worse, silently failing without any indication to the user.

## Solution

The `bugSolution.js` file addresses this by properly handling the potential error within the `.catch` block. This ensures that even if the asynchronous operation fails, the server remains responsive and provides informative error logging.  Consider using a more robust error handling strategy in production applications, potentially including logging to a centralized service or sending error notifications.