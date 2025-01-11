#!/bin/bash

sleep 40

cd bruno-tests
bru run --env docker-environment

cd ../
npx playwright test
