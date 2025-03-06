export const columns = {
    VENDOR: [
        { label: "Code", key: "code", type: "text" as const },
        { label: "Name", key: "full_name", type: "text" as const },
        { label: "Payin Commission", key: "payin_commission", type: "text" as const },
        { label: "Payout Commission", key: "payout_commission", type: "text" as const },
        { label: "Net Balance", key: "balance", type: "text" as const },
        { label: "Designation", key: "designation_name", type: "text" as const },    
    ]
}

export const vendorColumns = {
    VENDOR: [
    { label: "Id", key: "id", type: "text" as const },
    { label: "Designation", key: "designation_name", type: "text" as const },
    { label: "Name", key: "full_name", type: "text" as const },
    { label: "Code", key: "code", type: "text" as const },
    { label: "Payin Commission", key: "payin_commission", type: "text" as const },
    { label: "Payout Commission", key: "payout_commission", type: "text" as const },
    { label: "Net Balance", key: "balance", type: "text" as const },
    { label: "Role Id", key: "role_id", type: "text" as const },
    { label: "User Id", key: "user_id", type: "text" as const },
    { label: "Created By", key: "created_by", type: "text" as const },
    { label: "Updated By", key: "updated_by", type: "text" as const },
    { label: "Created At", key: "created_at", type: "text" as const },
    { label: "Updated At", key: "updated_at", type: "text" as const },
    { label: "Config", key: "config", type: "text" as const },
    ]
    
}
