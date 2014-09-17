﻿using CorsairLinkPlusPlus.Driver.Sensor;

namespace CorsairLinkPlusPlus.Driver.Controller
{
    public abstract class ControllerBase
    {
        internal virtual void Apply(Sensor.BaseSensorDevice sensor)
        {

        }

        internal virtual void Refresh(Sensor.BaseSensorDevice sensor)
        {

        }
    }
}
