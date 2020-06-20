import random
import json
import fixtures
from locust import HttpUser, task, constant

class OctopipeSameClusterTest(HttpUser):
    wait_time = constant(0.01)

    @task
    def deploy(self):
        request_data = fixtures.get_samecluster_request()
        response = self.client.post("/api/v1/pipelines", data = json.dumps(request_data), catch_response = True)
        print(response)