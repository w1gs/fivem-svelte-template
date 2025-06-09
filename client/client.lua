RegisterNUICallback(Receive.close, function(_, cb)
	print("CLOSED")
	SendNUIEvent(Send.visible, false)
	SetNuiFocus(false, false)
	cb(1)
end)

RegisterNUICallback(Receive.clearArea, function(data, cb)
	DebugLogger(("Clearing area with a radius of: %d"):format(data.radius))
	local curCoords = GetEntityCoords(PlayerPedId())
	local radiusToFloat = data.radius + 0.0
	ClearAreaLeaveVehicleHealth(curCoords.x, curCoords.y, curCoords.z, radiusToFloat, false, false, false, false)
	cb(1)
end)

RegisterCommand("showui", function()
	SendNUIEvent(Send.visible, true)
	SetNuiFocus(true, true)
end, false)
