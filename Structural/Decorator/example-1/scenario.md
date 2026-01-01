# Example: Notification System — Using Decorator Pattern


## Scenario

Our application only needed to send **welcome emails** when users registered.  
As the platform grew, customers requested additional features:

| New Requirement | Explanation |
|-----------------|-------------|
| Add more notification channels | SMS, Slack, Facebook, Push Notification |
| Add extra behaviors | Logging, Retry on failure, Queueing messages |


## Files

- **bad-code.ts**: The messy version. Do **not** use this one.  
- **better-code.ts**: The clean and proper version. Use this one :)  
